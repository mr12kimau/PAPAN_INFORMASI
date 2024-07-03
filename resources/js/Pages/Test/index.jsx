import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';



export default function Dashboard({ auth }) {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Format tanggal dengan nama hari dalam Bahasa Indonesia
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentTime.toLocaleDateString('id-ID', options);

    // Format waktu
    const formattedTime = currentTime.toLocaleTimeString('id-ID');

    return (

        <div className="flex flex-col bg-cyan-500">
        <div className="px-5 pt-2 pb-5 w-full bg-zinc-300 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5298df6f353abafbee32d8004819e9115fa5a123c599b083ad98e2fbf4ecdff6?apiKey=90a9c03b416f455b930ae3c8e113d732&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5298df6f353abafbee32d8004819e9115fa5a123c599b083ad98e2fbf4ecdff6?apiKey=90a9c03b416f455b930ae3c8e113d732&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5298df6f353abafbee32d8004819e9115fa5a123c599b083ad98e2fbf4ecdff6?apiKey=90a9c03b416f455b930ae3c8e113d732&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5298df6f353abafbee32d8004819e9115fa5a123c599b083ad98e2fbf4ecdff6?apiKey=90a9c03b416f455b930ae3c8e113d732&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5298df6f353abafbee32d8004819e9115fa5a123c599b083ad98e2fbf4ecdff6?apiKey=90a9c03b416f455b930ae3c8e113d732&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5298df6f353abafbee32d8004819e9115fa5a123c599b083ad98e2fbf4ecdff6?apiKey=90a9c03b416f455b930ae3c8e113d732&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5298df6f353abafbee32d8004819e9115fa5a123c599b083ad98e2fbf4ecdff6?apiKey=90a9c03b416f455b930ae3c8e113d732&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5298df6f353abafbee32d8004819e9115fa5a123c599b083ad98e2fbf4ecdff6?apiKey=90a9c03b416f455b930ae3c8e113d732&"
                className="grow shrink-0 max-w-full aspect-[1.64] w-[168px] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center mt-2 text-base text-center text-black max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/629e5031905230f57e765b2e538d71e95c40f4d6b4c1ee4cc4cba70cbf630620?apiKey=90a9c03b416f455b930ae3c8e113d732&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/629e5031905230f57e765b2e538d71e95c40f4d6b4c1ee4cc4cba70cbf630620?apiKey=90a9c03b416f455b930ae3c8e113d732&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/629e5031905230f57e765b2e538d71e95c40f4d6b4c1ee4cc4cba70cbf630620?apiKey=90a9c03b416f455b930ae3c8e113d732&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/629e5031905230f57e765b2e538d71e95c40f4d6b4c1ee4cc4cba70cbf630620?apiKey=90a9c03b416f455b930ae3c8e113d732&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/629e5031905230f57e765b2e538d71e95c40f4d6b4c1ee4cc4cba70cbf630620?apiKey=90a9c03b416f455b930ae3c8e113d732&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/629e5031905230f57e765b2e538d71e95c40f4d6b4c1ee4cc4cba70cbf630620?apiKey=90a9c03b416f455b930ae3c8e113d732&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/629e5031905230f57e765b2e538d71e95c40f4d6b4c1ee4cc4cba70cbf630620?apiKey=90a9c03b416f455b930ae3c8e113d732&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/629e5031905230f57e765b2e538d71e95c40f4d6b4c1ee4cc4cba70cbf630620?apiKey=90a9c03b416f455b930ae3c8e113d732&"
                  className="aspect-[7.14] w-[387px]"
                />
                <div className="mt-2.5">
                  Jl. Umban Sari No.1, Umban Sari, Kec. Rumbai, Kota Pekanbaru,
                  Riau 28265
                  <br />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
              <div className="self-stretch my-auto text-2xl font-bold text-center text-black max-md:mt-10">
              {formattedDate}
                <br />
                {formattedTime}
              </div>
            </div>
          </div>
        </div>
        <div className="z-10 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-5 font-bold text-center text-black max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col items-center px-16 pt-7 pb-96 w-full text-4xl min-h-[628px] max-md:px-5 max-md:pb-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/136b8cbaf6b0a250faeae51b104bd7e89aebad146c66e4c5fc9646bcabfb4afc?apiKey=90a9c03b416f455b930ae3c8e113d732&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/136b8cbaf6b0a250faeae51b104bd7e89aebad146c66e4c5fc9646bcabfb4afc?apiKey=90a9c03b416f455b930ae3c8e113d732&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/136b8cbaf6b0a250faeae51b104bd7e89aebad146c66e4c5fc9646bcabfb4afc?apiKey=90a9c03b416f455b930ae3c8e113d732&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/136b8cbaf6b0a250faeae51b104bd7e89aebad146c66e4c5fc9646bcabfb4afc?apiKey=90a9c03b416f455b930ae3c8e113d732&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/136b8cbaf6b0a250faeae51b104bd7e89aebad146c66e4c5fc9646bcabfb4afc?apiKey=90a9c03b416f455b930ae3c8e113d732&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/136b8cbaf6b0a250faeae51b104bd7e89aebad146c66e4c5fc9646bcabfb4afc?apiKey=90a9c03b416f455b930ae3c8e113d732&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/136b8cbaf6b0a250faeae51b104bd7e89aebad146c66e4c5fc9646bcabfb4afc?apiKey=90a9c03b416f455b930ae3c8e113d732&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/136b8cbaf6b0a250faeae51b104bd7e89aebad146c66e4c5fc9646bcabfb4afc?apiKey=90a9c03b416f455b930ae3c8e113d732&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  Video Promosi
                </div>
                <div className="self-start mt-4 ml-10 text-2xl max-md:ml-2.5">
                  Informasi Penting
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-end pt-7 pb-0.5 pl-20 w-full text-4xl font-bold text-center text-black bg-yellow-400 border border-black border-solid max-md:max-w-full">
                <div>Berita Kampus</div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/889f5ea313dfbd9a8d39f8ae180cce165fa19feb42c48367a45bfed0e17c5a34?apiKey=90a9c03b416f455b930ae3c8e113d732&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/889f5ea313dfbd9a8d39f8ae180cce165fa19feb42c48367a45bfed0e17c5a34?apiKey=90a9c03b416f455b930ae3c8e113d732&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/889f5ea313dfbd9a8d39f8ae180cce165fa19feb42c48367a45bfed0e17c5a34?apiKey=90a9c03b416f455b930ae3c8e113d732&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/889f5ea313dfbd9a8d39f8ae180cce165fa19feb42c48367a45bfed0e17c5a34?apiKey=90a9c03b416f455b930ae3c8e113d732&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/889f5ea313dfbd9a8d39f8ae180cce165fa19feb42c48367a45bfed0e17c5a34?apiKey=90a9c03b416f455b930ae3c8e113d732&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/889f5ea313dfbd9a8d39f8ae180cce165fa19feb42c48367a45bfed0e17c5a34?apiKey=90a9c03b416f455b930ae3c8e113d732&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/889f5ea313dfbd9a8d39f8ae180cce165fa19feb42c48367a45bfed0e17c5a34?apiKey=90a9c03b416f455b930ae3c8e113d732&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/889f5ea313dfbd9a8d39f8ae180cce165fa19feb42c48367a45bfed0e17c5a34?apiKey=90a9c03b416f455b930ae3c8e113d732&"
                  className="mt-96 w-44 max-w-full aspect-[0.57] max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center px-1 py-6 text-2xl text-center text-black bg-white max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
          pharetra turpis, ac interdum tellus. Suspendisse iaculis est nisl,{" "}
        </div>
      </div>
  
        
    );
}
