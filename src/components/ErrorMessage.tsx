const ErrorMessage = ({ message }: { message: string }) => {
    return (
        <aside>
            <h1>Something went wrong x.x</h1>
            <p>{message}</p>
        </aside>
    );
};

export default ErrorMessage;
