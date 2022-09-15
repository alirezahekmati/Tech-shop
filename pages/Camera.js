import Link from "next/link";
export default function Camera() {
  return (
    <div>
      <h1>Camera Here !</h1>
      <p>heyu</p>
      <Link href={`/`}>
        <a>بازگشت به صفحه اصلی</a>
      </Link>
    </div>
  );
}
