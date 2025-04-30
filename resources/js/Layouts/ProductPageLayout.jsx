import TransparentInput from "@/Components/TransparentInput.jsx";


export default function ProductPageLayout({className, isShowing, ...props}) {
    return (
        <div className="flex flex-1 items-center justify-evenly">
            <div>
                <img src="" alt="Image" className="w-100"/>
            </div>
            <h1 className="w-1/4">
                {isShowing ? (
                    <span>bla</span>
                ) : (
                    <TransparentInput
                        placeholder="Le titre de votre produit"
                        type="title"
                    >

                    </TransparentInput>
                )}
            </h1>
        </div>
    )
}
