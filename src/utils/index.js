export const validateForm = function () {
    const formRules = {
        "account" : {
            rule: /^[\w]{4,12}$/g,
            tips: '您输入的账号有误，请重新输入'
        },
        "password": {
            rule: /^[\w]{4,12}$/g,
            tips: '您输入的密码有误，请重新输入'
        }
    }

    return {
        rulesObj: formRules,
        edit (name,rule = {}) {
            for (let key in this.rulesObj) {
                if (name == key) {
                    this.rulesObj[name] = {
                        ...this.rulesObj[name],
                        rule
                    }
                }
            }
            return this
        },
        getValidateResult (formData) {
            let _validateResult = [];

            for (let key in this.rulesObj) {
                for (let _key in formData) {
                    if (key == _key) {
                        _validateResult.push({
                            name:_key,
                            isRight: this.rulesObj[key].rule.test(formData[_key]),
                            tips: this.rulesObj[key].tips
                        })
                    }
                }
            }
            return _validateResult
        }
    }


}