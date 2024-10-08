const vscode = require('vscode');

function activate(context) {
    // 插件激活时显示消息
    vscode.window.showInformationMessage('kjl 提示插件已激活');

}

// 插件停用时调用的函数
function deactivate() {}

// 导出插件的激活和停用函数
module.exports = {
    activate,
    deactivate
};
