import '../Loader/Loader.scss';
export default (props: any) => {
    const isLoading: boolean = props.isLoading;
    return (
        <div>
            {isLoading &&
                <div className="overlay">
                    <div className="spinner"></div>
                </div>
            }
        </div>
    )
}