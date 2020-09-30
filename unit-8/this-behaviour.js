const user = {role: 'user'};
const admin = {role: 'admin'};

function showRole() {
    console.log(this.role);
}

user.showRole = showRole;
admin.showRole = showRole;

user.showRole(); // 'user', this === user
admin.showRole(); // 'admin', this === admin

function alertThis() {
    alert(this);
}
