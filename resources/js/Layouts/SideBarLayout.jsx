
export default function SideBarLayout({children, className}){
    return(
        <div className={'flex flex-col min-h-screen items-center justify-start shadow-sm p-3 bg-white ' + className}>
            {children}
        </div>
    )
}
