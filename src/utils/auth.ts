export interface User {
    id:number,
    role:Role
}

type Role = keyof typeof ROLES;

type Permission = (typeof ROLES)[Role][number]

const ROLES = {
    admin:[
        "view:comments",
        "create:comments",
        "update:comments",
        "delete:comments",
    ],
    moderator:[
        "view:comments",
        "create:comments",
        "delete:comments",
    ],
    user: [
        "view:comments",
        "create:comments",
    ]
} as const;

function hasPermission(
    user:User,
    permission: Permission
){
    return (ROLES[user.role] as readonly Permission[]).includes(permission)
}

export default hasPermission;