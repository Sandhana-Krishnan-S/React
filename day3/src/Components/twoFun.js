function One() {
    return (
        <div>
            <p>I am function 1</p>
            <TwoFun />
        </div>
    )
}

function TwoFun() {
    return (
        <div>
            <p>I am function 2</p>
        </div>
    );
}

export default One;