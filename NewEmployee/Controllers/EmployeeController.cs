using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using NewEmployee.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace NewEmployee.Controllers
{
    public class EmployeeController : Controller
    {
        [HttpGet]
        public ActionResult GetEmployees()
        {
            List<EmployeeVM> list = new List<EmployeeVM>()
            {
                new EmployeeVM()
                {
                    FullName = "Milton Waddams"
                },
                new EmployeeVM()
                {
                    FullName = "Andy Bernard"
                }
            };

            return GetJsonContentResult(list);
        }

        [HttpPost]
        public ActionResult Create(EmployeeVM employee)
        {
            if (ModelState.IsValid)
            {
                var id = new { id = 12345 };
                return GetJsonContentResult(id);
            }

            List<string> errors = new List<string>();
            errors.Add("Insert failed.");
            if (!ModelState.IsValidField("Notes"))
            {
                errors.Add("Notes must be at least 5 characters long.");
            }

            return new HttpStatusCodeResult(HttpStatusCode.InternalServerError,
                string.Join(" ", errors));
        }

        [HttpPost]
        public ActionResult Update(EmployeeVM employee)
        {
            if (ModelState.IsValid)
            {
                return new HttpStatusCodeResult(HttpStatusCode.OK, "Update success");
            }

            List<string> errors = new List<string>();
            errors.Add("Update failed.");
            if (!ModelState.IsValidField("Notes"))
            {
                errors.Add("Notes must be at least 5 characters long.");
            }

            return new HttpStatusCodeResult(HttpStatusCode.InternalServerError,
                string.Join(" ", errors));
        }

        public ContentResult GetJsonContentResult(object data)
        {
            var camelCaseFormatter = new JsonSerializerSettings();
            camelCaseFormatter.ContractResolver = new CamelCasePropertyNamesContractResolver();
            var jsonResult = new ContentResult
            {
                Content = JsonConvert.SerializeObject(data, camelCaseFormatter),
                ContentType = "application/json"
            };

            return jsonResult;
        }
    }
}