import angular from "angular";
import "./pickerView";
import "./pickerView.css";

/**
 * @ngdoc module
 * @name  cgs-picker-view
 */
angular
    .module("cgs-picker-view", [])
    /**
     * @ngdoc directive
     * @name pickerView
     * @module cgs-picker-view
     * @restrict E
     * @scope { options:"=" , datas:"="}
     * @link
        */
    .directive("pickerView", () => {
        return {
            restrict: "A",
            require: 'ngModel',
            scope: {
                options: "=",
                datas: "="
            },
            link: ($scope, $element, $attrs, $ngModelCtrl) => {
                $element.bind("click", () => {
                    let pickerView = new PickerView({
                        bindElem: $element[0], // 绑定的元素
                        data: $scope.options.datas ? $scope.options.datas : $scope.datas, // 说明：该参数必须符合json格式 且最里层是个数组，如上面的data变量所展示的[3,4]。
                        title: $scope.options.title ? $scope.options.title : "选择框", // 顶部标题文本 默认为“标题”
                        leftText: '取消', // 头部左侧按钮文本 默认为‘取消’
                        rightText: '确定', // 头部右侧按钮文本 默认为“确定”
                        rightFn: function (selectArr) {  // 点击头部右侧按钮的回调函数，参数为一个数组，数组对应滚轮中每项对应的值
                            $ngModelCtrl.$setViewValue(selectArr);
                        }
                    });
                })
            }
        }
    });

export default "cgs-picker-view";