
const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="bg-black text-white py-8 mt-auto pages">
            <div className="container mx-auto flex justify-center gap-12 items-center">
                <div className="">
                    <h2 className="text-lg font-semibold">Sty<span className="text-blue">ro</span></h2>
                </div>

                <div>
                    <p className="text-sm">&copy; {year} Styro. All rights reserved.</p>
                </div>

                <div className="flex space-x-12">
                    <a href="#" className="hover:underline">About Us</a>
                    <a href="#" className="hover:underline">Contact</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                </div>
            </div>
        </footer>

    )
}

export default Footer
