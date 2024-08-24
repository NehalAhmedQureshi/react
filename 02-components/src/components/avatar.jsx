function Avatar({ img, name, title, bgcolor,textColor }) {
    return (
        <div style={{
            border: "2px solid black",  
            display: "flex",
            borderRadius: "150px",
            margin: "auto",
            padding: "10px",
            marginBottom: "10px",
            paddingLeft: "20px",
            paddingRight: "80px",
            gap: "40px",
            backgroundColor: bgcolor ? bgcolor : "violet",
            color: textColor ? textColor : "black"
        }}>
            <img style={{ 
                border: "2px solid black",
                width:"100px",
                borderRadius:"50%", }}
                src={img} alt="user avatar" />
            <div style={{ 
                flexGrow: 1 }}>
                <h2 className="username">{name}</h2>
                <h3 className="title">{title}</h3>
            </div>
        </div>
    )
}


export default Avatar