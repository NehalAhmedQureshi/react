import StudentData from "./components/studentData"
import Avatar from "./components/avatar"

function App() {

  // const studentData = [
  //   {
  //     name: "nehal",
  //     rollNo: 213857,
  //     batch: 11,
  //     teacher: "Sir Bilal",
  //   },
  //   {
  //     name: "arsalan",
  //     rollNo: 214857,
  //     batch: 12,
  //     teacher: "Sir Ahmer",
  //   },
  //   {
  //     name: "arib",
  //     rollNo: 224857,
  //     batch: 12,
  //     teacher: "Sir Ahmer",
  //   },
  // ]

  return (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    }}>

      <h1>User Profile</h1>

      <StudentData 
        name="Nehal"
        rollNo="213857"
        batch="11"
        teacher="sir bilal"
      />

      <Avatar
        img="https://media.istockphoto.com/id/2021524839/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%84%D0%B8%D0%BD%D0%B0%D0%BD%D1%81%D1%8B-%D0%B8-%D0%B8%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%86%D0%B8%D0%B8-%D0%B2-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%D0%B8%D1%80%D1%83%D0%B9%D1%82%D0%B5-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%BA%D0%B8-%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D1%80%D0%BE%D1%81%D1%82%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BF%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D0%B8%D1%8F.jpg?s=612x612&w=0&k=20&c=k4l63g9YFCzjadPc7khYxo6NyqqHZdJxVO9kLvrobKE="
        name="def"
        title="this is me"
        bgcolor="grey"
      />

      <Avatar
        img="https://media.istockphoto.com/id/1560326952/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D1%81%D0%B2%D0%B5%D1%82%D0%BB%D0%B0%D1%8F-%D1%81%D1%82%D1%80%D0%B5%D0%BB%D0%BA%D0%B0-%D0%B2%D0%B2%D0%B5%D1%80%D1%85-%D0%BF%D0%BE-%D1%81%D0%B5%D1%82%D0%BA%D0%B5-%D1%82%D0%B5%D0%BC%D0%BD%D0%B0%D1%8F-%D1%84%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%B0.jpg?s=612x612&w=0&k=20&c=NVFX_Sk4P30VEoQfkOJXEBOmJsuwuJv1377QOtJ6dL4="
        name="Arsalan"
        title="----------------"
        bgcolor="lightSalmon"
      />

      <Avatar
        img="https://media.istockphoto.com/id/1419539600/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F-%D0%B8-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D0%B0-%D0%BD%D0%B0-%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA%D0%B5-%D0%B2-%D0%BA%D0%BE%D1%80%D0%BF%D0%BE%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D0%B9-%D0%BA%D0%BE%D0%BD%D1%84%D0%B5%D1%80%D0%B5%D0%BD%D1%86%D0%B8%D0%B8-%D0%B8%D0%BB%D0%B8-%D0%BE%D1%84%D0%B8%D1%81%D0%BD%D0%BE%D0%B5.jpg?s=612x612&w=0&k=20&c=d-qxnh6z6X073mDJ-JW8CpvDm4OpvSs-_g9jJXcMaZg="
        name="Arib"
        title="---------------"
        bgcolor="lavender"
      />

    </div>
  )
}

export default App
