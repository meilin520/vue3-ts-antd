module.exports = {
        printWidth: 200,// 指定代码长度,超出换行
        tabWidth: 2,// tab 键的宽度
        useTabs: true,// 使用tab
        semi: false,// 结尾加上分号
        singleQuote: true,// 使用单引号
        quoteProps:"as-needed",// 要求对象字面量属性是否使用1号包裹,('as-needed: 没有特殊要求,禁让使用,"consistent": 保特一数 , preserve: 不限制 想用就用
        trailingComma: es5,// 确保对象的最后一个属性后有逗号
        bracketSpacing: true,// 大括号有空格 { name: rose’}
        arrowParens: 'always' ,// 能头函数,单个参数添加括号
        requirePragma: false,// 是否严格按照文件顶部的特殊注释格式化代码
        insertPragma: false,// 是否在格式化的文件顶部插入Pragma标记,以表明该文件被prettier格式化过了
        proseWrap:preserve ,// 按照文件原样折行
        htmlWhitespaceSensitivity: 'ignore',// html文件的空格敏感度,控制空格是否影响布局
        endofLine: 'crlf',// 结尾是 \n  r \n\r auto
        eslintIntegration: true,
}