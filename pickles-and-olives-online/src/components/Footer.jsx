export default function Footer({ colour }) {
  return (
    <div
      className='flex w-full flex-col justify-between p-4 sm:flex-row'
      style={{ backgroundColor: colour }}
    >
      <span>email: melissa.mcfadzien@gmail.com </span>
      <span> UOA email: mmcf647@aucklanduni.ac.nz</span>
    </div>
  );
}
