
angularFormsApp.factory('DataService',
    function ($http) {

        var getEmployees = function () {
            return $http.get("Employee/GetEmployees");
        };

        var getEmployee = function (id) {
            if (id == 123) {
                return {
                    id: 123,
                    fullName: "Milton Waddams",
                    notes: "The ideal employee. Just don't touch his red stapler.",
                    department: "Administration",
                    dateHired: "November 26 2018",
                    breakTime: "November 26 2018 3:00 PM",
                    //topProgrammingLanguage: "C#",
                    //isUnderNonCompete: false,
                    //nonCompeteNotes: "",
                    perkCar: true,
                    perkStock: false,
                    perkSixWeeks: true,
                    payrollType: "none"
                };
            }
            return undefined;
        };

        var insertEmployee = function (newEmployee) {
            return $http.post("Employee/Create", newEmployee);
        };

        var updateEmployee = function (employee) {
            return $http.post("Employee/Update", employee);
        };

        return {
            insertEmployee: insertEmployee,
            updateEmployee: updateEmployee,
            getEmployee: getEmployee,
            getEmployees: getEmployees
        };
    });