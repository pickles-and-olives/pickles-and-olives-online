export default function Footer({ colour }) {
    return (
        <div className='flex flex-col sm:flex-row justify-between p-4 w-full'
        style={{ backgroundColor: colour }}>
            <span>email: melissa.mcfadzien@gmail.com </span>
            <span> UOA email: mmcf647@aucklanduni.ac.nz</span>
            
        </div>
    )
}

