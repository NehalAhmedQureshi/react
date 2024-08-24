import "../style/studentData.css"
function StudentData({ name, rollNo, batch, teacher }) {
    return (
        <div className="studentData" style={{
            // border: "2px solid black",
            // width: "40%",
            // borderRadius: "100px",
            // padding: "10px",
            // gap: "10px",
            // display: "flex",
            // flexDirection: "row",
            // justifyContent: "center",
            // alignItems: "center",
        }}>

            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Roll Number</th>
                        <th>Batch</th>
                        <th>Teacher</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{rollNo}</td>
                        <td>{batch}</td>
                        <td>{teacher}</td>
                    </tr>
                </tbody>

            </table>

        </div>
    )
}

export default StudentData