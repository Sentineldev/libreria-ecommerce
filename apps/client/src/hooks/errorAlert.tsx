type propsErrorAlert = {
    error: string
} 
 
function ErrorAlert({error}:propsErrorAlert){
   return(
        <div role="alert" className="alert alert-error h-14 w-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-8 w-8" 
                fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="w-full flex justify-center">
                <span className="text-sm text-white text-center">{error}</span>
            </div>
        </div>
   )
}

export default ErrorAlert;

