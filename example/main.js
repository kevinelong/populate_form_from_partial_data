if (!Array.isArray) {
    Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}

function lookUpCallBack(item) {
    POPULATE_DATA.applyData(window.form_element, item, window.data_field_map);
}

(function () {


    function appendLookupButton(clickHandler, targetSelector) {
        var button = document.createElement('button');
        button.innerText = 'Lookup...';

        button.style.position = 'absolute';
        button.style.right = '0';
        button.style.top = '0';

        button.addEventListener('click', clickHandler);


        var target = document.querySelector(targetSelector);
        target.style.position = 'relative';
        target.appendChild(button)
    }


    function setupContactOne() {

        function onClickOne(e) {
            e.preventDefault();

            window.data_field_map = [
                {"target_field": 'guardian_name', "source_field": ["fname", "mname", "lname"]},
                {"target_field": 'guardian_address', "source_field": "street"},

                {"target_field": 'guardian_city', "source_field": "city"},
                {"target_field": 'guardian_state', "source_field": "state"},

                {"target_field": 'guardian_zip', "source_field": "zip"},

                {"target_field": 'guardian_home_no', "source_field": "phone"},
                {"target_field": 'guardian_cell_no', "source_field": "phonecell"},
                {"target_field": 'guardian_work_no', "source_field": "phonew1"},
                {"target_field": 'guardian_other_no', "source_field": "phonew2"},

                {"target_field": 'guardian_email', "source_field": "email"}
            ];
            window.form_element = document.querySelector("#guardian_one");
            showLookupDialog();
        }

        appendLookupButton(onClickOne, "#guardian_one");
    }


    function setupContactTwo() {

        function onClickTwo(e) {
            e.preventDefault();

            window.data_field_map = [
                {"target_field": 'guardian_name2', "source_field": ["fname", "mname", "lname"]},
                {"target_field": 'guardian_address2', "source_field": "street"},

                {"target_field": 'guardian_city2', "source_field": "city"},
                {"target_field": 'guardian_state2', "source_field": "state"},

                {"target_field": 'guardian_zip2', "source_field": "zip"},

                {"target_field": 'guardian_home_no2', "source_field": "phone"},
                {"target_field": 'guardian_cell_no2', "source_field": "phonecell"},
                {"target_field": 'guardian_work_no2', "source_field": "phonew1"},
                {"target_field": 'guardian_other_no2', "source_field": "phonew2"},

                {"target_field": 'guardian_email2', "source_field": "email"}
            ];
            window.form_element = document.querySelector("#guardian_two");
            showLookupDialog();
        }

        appendLookupButton(onClickTwo, "#guardian_two");
    }


    function init() {
        setupContactOne();
        setupContactTwo();
    }

    document.addEventListener('DOMContentLoaded', init);


}());