import LoginForm from "./form/LoginForm"

const Home = () => {
  return (
    <section className="bg-default bg-cover bg-no-repeat bg-center h-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                <LoginForm />
            </div>
        </div>
    </section>
  )
}

export default Home