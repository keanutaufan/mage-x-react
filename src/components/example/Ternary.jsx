export default function Ternary({ status }) {
  return (
    <div>
      { (status === "lulus") ? 
      <p style={{ color: "green" }}>Selamat, kamu lulus ujian</p> : 
      <p style={{ color: "red" }}>Maaf, kamu belum lulus ujian. Jangan putus asa!</p> 
      }
    </div>
  );
}