import React from 'react'

function Profile() {
  return (
    <div className='flex w-full h-full gap-16 bg-blue-100 items-center'>
      <div  className='flex flex-col w-80 gap-2 py-10 justify-between'>
      <div className='bg-white '>
        <p>hi./</p>
        <div className='flex '>
        <h1 className='font-bold text-5xl text-white bg-black -ml-12 px-2 py-6 rounded-full'>MP</h1>
        <h1 className='font-semibold text-2xl px-5'>Mohammed Risvan</h1>
        </div>
        </div>
        <ul className='flex flex-col text-xl bg-white  text-black font-light '>
            <li className='w-full flex gap-5 py-3 px-5  hover:border-b-2'><img className='w-5' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGZpbGw9IiMyRDJEMkQiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTggNC42NjdMMTYgMkg0TDIgNC42NjdWMThoMTZWNC42Njd6TTAgNGwzLTRoMTRsMyA0djE2SDBWNHoiLz4KICAgICAgICA8cGF0aCBkPSJNMCA0aDIwdjJIMHoiLz4KICAgICAgICA8cGF0aCBkPSJNOSAxLjExMWgydjRIOXoiLz4KICAgIDwvZz4KPC9zdmc+Cg==' />My Orders</li>
            <li className='w-full flex gap-5 py-3 px-5  hover:border-b-2'><img className='w-5' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGZpbGw9IiMyRDJEMkQiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAgMmE4IDggMCAxIDAgMCAxNiA4IDggMCAwIDAgMC0xNnptMCAxOEM0LjQ3NyAyMCAwIDE1LjUyMyAwIDEwUzQuNDc3IDAgMTAgMHMxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiLz4KICAgICAgICA8cGF0aCBkPSJNOSA4LjUwNXY2aDJ2LTZIOXpNOSA2YzAgLjU0OC40NTIgMSAxIDFzMS0uNDUyIDEtMS0uNDUyLTEtMS0xLTEgLjQ1Mi0xIDF6Ii8+CiAgICA8L2c+Cjwvc3ZnPgoK'/>Need help?</li>
            </ul>

            <li className='w-full flex text-xl  gap-5 py-3 px-5  bg-white hover:border-b-2 font-light'><img className='w-5' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDIwIDE2Ij4KICAgIDxnIGZpbGw9IiMyRDJEMkQiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMCAybDItMnYxNmwtMi0yaDIwbC0yIDJWMGwyIDJIMHptMjAtMnYxNkgwVjBoMjB6Ii8+CiAgICAgICAgPHBhdGggZD0iTTYgMWgydjE0SDZ6Ii8+CiAgICAgICAgPHBhdGggZD0iTTMuOTIyIDkuMzJMNy43IDYuNDU3bC45NTcuOTU3LTQuNyAzLjc4NnoiLz4KICAgICAgICA8cGF0aCBkPSJNOS43MzQgOS4zMkw1Ljk1NyA2LjQ1NyA1IDcuNDE0IDkuNyAxMS4yeiIvPgogICAgICAgIDxwYXRoIGQ9Ik0wIDdoMjB2MkgweiIvPgogICAgICAgIDxlbGxpcHNlIGN4PSI4LjUiIGN5PSI3IiByeD0iMS41IiByeT0iMSIvPgogICAgICAgIDxlbGxpcHNlIGN4PSI1LjUiIGN5PSI3IiByeD0iMS41IiByeT0iMSIvPgogICAgPC9nPgo8L3N2Zz4K'/>Gift cards &vouchers</li>

        <ul className='flex flex-col text-xl bg-white  text-black font-light '>
            <li className='w-full flex gap-5 py-3 px-5  hover:border-b-2'><img className='w-5' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDIyIDE4Ij4KICAgIDxnIGZpbGw9IiMyRDJEMkQiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMiAxNmgxOFYySDJ2MTR6TTAgMGgyMnYxOEgwVjB6Ii8+CiAgICAgICAgPHBhdGggZD0iTTEyIDVoNHYxaC00ek0xMiA4aDZ2MWgtNnpNMTIgMTFoNnYxaC02ek05IDdhMiAyIDAgMSAxLTQgMCAyIDIgMCAwIDEgNCAwem0tMiAzYy0xLjU1NCAwLTIuODM0IDEuMjgzLTMgM2g2Yy0uMTY2LTEuNzE3LTEuNDQ2LTMtMy0zeiIvPgogICAgPC9nPgo8L3N2Zz4K'/>My details</li>
            <li className='w-full flex gap-5 py-3 px-5  hover:border-b-2'><img className='w-5' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDE4IDIwIj4KICAgIDxnIGZpbGw9IiMyRDJEMkQiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMiAxOGgxNFY4LjMxNkw5IDIuNTg1bC03IDUuNzNWMTh6TTAgNy4zNjhMOSAwbDkgNy4zNjhWMjBIMFY3LjM2OHoiLz4KICAgICAgICA8cGF0aCBkPSJNMTEgOWgydjJoLTJ6TTcgMTNoNHY2SDd6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo='/>Address book</li>
            <li className='w-full flex gap-5 py-3 px-5  hover:border-b-2'><img className='w-5' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIwIDE0Ij4KICAgIDxnIGZpbGw9IiMyRDJEMkQiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMCAybDItMnYxNGwtMi0yaDIwbC0yIDJWMGwyIDJIMHptMjAtMnYxNEgwVjBoMjB6Ii8+CiAgICAgICAgPHBhdGggZD0iTTEgM2gxOXY0SDF6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo='/>Payment methodes</li>
            <li className='w-full flex gap-5 py-3 px-5  hover:border-b-2'><img className='w-5' src='data:image/svg+xml;base64,CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCI+CiAgICA8ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIgMTR2MmwyLjctMmgxMS4zMDZjMS4xIDAgMS45OTQtLjkgMS45OTQtMi4wMDlWNC4wMUEyLjAwMyAyLjAwMyAwIDAgMCAxNi4wMDYgMkgzLjk5NEMyLjg5NCAyIDIgMi45IDIgNC4wMDlWMTR6bTMuMzMzIDJMMCAyMFY0LjAwOUE0LjAwMiA0LjAwMiAwIDAgMSAzLjk5NCAwaDEyLjAxMkMxOC4yMTUgMCAyMCAxLjggMjAgNC4wMDl2Ny45ODJBNC4wMDIgNC4wMDIgMCAwIDEgMTYuMDA2IDE2SDUuMzMzeiIvPgogICAgICAgIDxwYXRoIGQ9Ik02IDlhMSAxIDAgMSAxIDAtMiAxIDEgMCAwIDEgMCAyem00IDBhMSAxIDAgMSAxIDAtMiAxIDEgMCAwIDEgMCAyem00IDBhMSAxIDAgMSAxIDAtMiAxIDEgMCAwIDEgMCAyeiIvPgogICAgPC9nPgo8L3N2Zz4K'/>Contact preferances</li>
            <li className='w-full flex gap-5 py-3 px-5  hover:border-b-2'><img className='w-5' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIwIDE0Ij4KICAgIDxnIGZpbGw9IiMyRDJEMkQiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTE0LjkzIDEyYTguMDM2IDguMDM2IDAgMCAwLTMuMzU2LTMuMTZjLjg3OC0uNTMgMS45NTgtLjg0IDMuMTI1LS44NCAyLjc0NyAwIDUuMDA4IDEuNzEgNS4zMDEgNGgtNS4wN3pNMTggNGEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDB6bS0yIDBhMSAxIDAgMSAwLTIgMCAxIDEgMCAwIDAgMiAweiIvPgogICAgICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTcgMmEyIDIgMCAxIDAgMCA0IDIgMiAwIDAgMCAwLTR6bTAgNmE0IDQgMCAxIDEgMC04IDQgNCAwIDAgMSAwIDh6bTYuNTQ0IDQuNTIyYTUuMTE2IDUuMTE2IDAgMCAwLS4yOTktLjUyMkguNzU1Yy0uMTEuMTY5LS4yMS4zNDMtLjI5OS41MjJMMS43NDcgMTRoLjI4NkMyLjQzNiAxMi4zNDEgNC40NCAxMSA3IDExYzIuNTU5IDAgNC41NjQgMS4zNDEgNC45NjcgM2guMjg2bDEuMjkxLTEuNDc4ek03IDljLTMuNjI3IDAtNi42MTMgMi4xMzgtNyA1aDE0Yy0uMzg3LTIuODYyLTMuMzczLTUtNy01eiIvPgogICAgPC9nPgo8L3N2Zz4K'/>Social accounts</li>
            <li className='w-full flex gap-5 py-3 px-5  hover:border-b-2'><img className='w-5' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDIwIDE3Ij4KICAgIDxnIGZpbGw9IiMyRDJEMkQiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTE5Ljk2NS4xdjE2LjhoLTkuNDQxdi0yLjA2N2g3LjM4OHMuMDQtMTIuNjg5IDAtMTIuNjg5aC03LjM4OFYuMWg5LjQ0MXoiLz4KICAgICAgICA8cGF0aCBkPSJNMi4xNDMgOS41NXYtMi4xaDExLjUyNHYyLjF6Ii8+CiAgICAgICAgPHBhdGggZD0iTTEuNTI1IDEwLjAzNGwtLjAwMi4wMDJMLjA0MiA4LjU1NGwuMDAxLS4wMDEtLjAwMS0uMDAyTDEuNTIzIDcuMDdsLjAwMi4wMDEgMy43MTQtMy43MTRMNi43MjEgNC44NCAzLjAwNyA4LjU1M2wzLjcxNCAzLjcxNC0xLjQ4MiAxLjQ4MS0zLjcxNC0zLjcxNHoiLz4KICAgIDwvZz4KPC9zdmc+Cg=='/>Sign out</li>
        </ul>
        </div>
      <div className='w-screen bg-black h-[615px] px-5 py-5'style={{backgroundImage:'URL("https://assets.asosservices.com/myaccount/images/32753d009fd2a59acbc4.svg")'}} >
      <div className=''>

      </div>
      </div>
    </div>
  )
}

export default Profile
