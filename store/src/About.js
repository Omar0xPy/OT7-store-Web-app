function About()
{
    const style = {
        fontFamily:"Manrope SemiBold",
        padding: "20px",
        color:"green"
    };

    const paragraph = {
        fontFamily:"Manrope SemiBold",
        padding: "20px"
    }

    return (
        <div>
            <h1 style={style}>About us</h1>
            <p style={paragraph}>
                OT7 is a store specilaized in various types of items ranging from clothing & accessories to electronics
            </p>
        </div>
    );
}

export default About;