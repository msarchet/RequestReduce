using System;
using System.Collections;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using RequestReduce.Configuration;
using RequestReduce.Utilities;
using RequestReduce.Module;
using System.Collections.Generic;

namespace RequestReduce.Handlers
{
    public class DashboardDataHandler : IHttpHandler
    {
        private readonly IRRConfiguration config;
        private readonly IIpFilter ipFilter;
        private readonly IReducingQueue queue;
        private readonly IReductionRepository repo;
        private readonly IUriBuilder uriBuilder;

        public DashboardDataHandler(IRRConfiguration config, IIpFilter ipFilter, IReducingQueue queue, IReductionRepository repo, IUriBuilder uriBuilder)
        {
            this.config = config;
            this.ipFilter = ipFilter;
            this.queue = queue;
            this.repo = repo;
            this.uriBuilder = uriBuilder;
        }

        public void ProcessRequest(HttpContext context)
        {
            ProcessRequest(new HttpContextWrapper(context));
        }

        private void ProcessRequest(HttpContextBase context)
        {
            var dashboardHtml = Resources.ResourceStrings.Dashboard;
            var user = context.User == null ? string.Empty : context.User.Identity.Name;
            if ((config.AuthorizedUserList.AllowsAnonymous() || config.AuthorizedUserList.Contains(user)) &&
                ipFilter.IsAuthorizedIpAddress(context))
            {
                var transformedDashboard = TransformDashboard(dashboardHtml);
                context.Response.Write(transformedDashboard);
            }
            else
                context.Response.StatusCode = 401;
            if (context.ApplicationInstance != null)
                context.ApplicationInstance.CompleteRequest();
        }

        private string TransformDashboard(string dashboard)
        {
            var jsonData = new {
                            MachineName = Environment.MachineName,
                            Application = AppDomain.CurrentDomain.BaseDirectory,
                            Version = Assembly.GetExecutingAssembly().GetName().Version.ToString(),
                            ProcesseingItems = queue.ItemBeingProcessed == null ? null : ListProcessedUrls(queue.ItemBeingProcessed.Urls, "::"),
                            ConfigurateValues = new {}
                           };

            return jsonData.ToString();
            
        }

        private static List<string> GetConfigurationValues()
        {
            //var configProps = config.GetType().GetProperties();
            //var configList = new List<string>();
            //foreach (var item in configProps)
            //{
            //    var array = item.GetValue(config, null) as IEnumerable;
            //    if (array == null || item.PropertyType.IsAssignableFrom(typeof(string)))
            //    {
            //        string value = Convert.ToString(item.GetValue(config, null));
            //        string result;
            //        switch (item.Name)
            //        {
            //            case "JavaScriptUrlsToIgnore":
            //                result = ListUrls(value, ",");
            //                break;
            //            case "ConnectionStringName":
            //                result = Regex.Replace(value, @";(PWD|PASSWORD)=\S+(;|$)", ";PASSWORD HIDDEN;", RegexOptions.Singleline | RegexOptions.IgnoreCase);
            //                break;
            //            default:
            //                result = value;
            //                break;
            //        }
            //        configList.Add(result);
            //    }
            //    else
            //    {
            //        configList.Append("<td>");
            //        foreach (var mem in array)
            //        {
            //            configList.Append(mem);
            //            configList.Append("<br/>");
            //        }
            //        configList.Append("</td>");
            //    }
            //    configList.Append("</tr>");
            //}
            //transformed = transformed.Replace("<%configs%>", configList.ToString());
            return null;
        }

        private static List<string> ListProcessedUrls(string urls, string separator)
        {
            if (string.IsNullOrEmpty(urls))
            {
                return null;
            }

            return urls.Split(new[] { separator }, StringSplitOptions.RemoveEmptyEntries).ToList();
        }

        public bool IsReusable
        {
            get { return true; }
        }
    }
}
