
export default function DashboardNavLink({children, className, props, icon}){
    return(
        <div
            {...props}
             className={'rounded flex p-3 w-full cursor-pointer items-center justify-center gap-3 hover:bg-gray-200 duration-300 ' + ' ' + className}
        >
            <i className={icon}></i>
            <a href="">{children}</a>
        </div>
    )
}
