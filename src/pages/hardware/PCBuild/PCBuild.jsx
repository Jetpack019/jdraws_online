import React, { useState } from 'react';
import './PCBuild.scss';

const HardwarePart = ({ className, imgSrc, description }) => (
  <div className={className}>
    <img src={imgSrc} alt="" />
    <h3>{description}</h3>
  </div>
);

function PCBuild() {
  const [currentPC, setCurrentPC] = useState('pc1'); // Start with pc1

  const pc1 = {
    parts: [
      { className: 'container_cpu', imgSrc: '/assets/hardwareImg/pc1/pc1_cpu.webp', description: 'CPU: AMD Ryzen 5 5600G 6core 12threads' },
      { className: 'container_motherboard', imgSrc: '/assets/hardwareImg/pc1/pc1_mobo.webp', description: 'Motherboard: MSI B450M-A PRO MAX V2' },
      { className: 'container_gpu', imgSrc: '/assets/hardwareImg/pc1/pc1_gpu.webp', description: 'GPU: Galax GTX 1650 GDDR6' },
      { className: 'container_ssd', imgSrc: '/assets/hardwareImg/pc1/pc1_ssd.jpg', description: 'SSD: Kingbank Nvme 512gb SSD' },
      { className: 'container_ram', imgSrc: '/assets/hardwareImg/pc1/pc1_ram.jpg', description: 'RAM: 16gb Kingbank 2x8gb DDR4 3600Mhz' },
      { className: 'container_psu', imgSrc: '/assets/hardwareImg/pc1/pc1_psu.webp', description: 'PSU: P500B Gigabyte 80+ bronze' },
      { className: 'container_monitor', imgSrc: '/assets/hardwareImg/pc1/pc1_monitor.png', description: 'Monitor: Viewpoint 22” 75hz' },
      { className: 'container_case', imgSrc: '/assets/hardwareImg/pc1/pc1_case.png', description: 'Case: CVS Robin Mini Tempered Casing W/x5 Rainbow Fans' },
    ],
    image: '/assets/hardwareImg/pc1/IMG_20240303_184327 2.png',
  };

  const pc1_upgrade = {
    parts: [
      { className: 'container_cpu', imgSrc: '/assets/hardwareImg/upgrade_pc1/upgrade_pc1_cpu.webp', description: 'CPU: AMD Ryzen 5 5600G 6core 12threads' },
      { className: 'container_motherboard', imgSrc: '/assets/hardwareImg/upgrade_pc1/upgrade_pc1_mobo.webp', description: 'Motherboard: MSI B450M-A PRO MAX V2' },
      { className: 'container_gpu', imgSrc: '/assets/hardwareImg/upgrade_pc1/upgrade_pc1_gpu.webp', description: 'GPU: ASUS Dual Radeon RX 6600 8GB GDDR6' },
      { className: 'container_ssd', imgSrc: '/assets/hardwareImg/upgrade_pc1/upgrade_pc1_ssd.jpg', description: 'SSD: Kingbank Nvme 512gb SSD' },
      { className: 'container_ram', imgSrc: '/assets/hardwareImg/upgrade_pc1/upgrade_pc1_ram.jpg', description: 'RAM: 16gb Kingbank 2x8gb DDR4 3600Mhz' },
      { className: 'container_psu', imgSrc: '/assets/hardwareImg/upgrade_pc1/upgrade_pc1_psu.webp', description: 'PSU: P500B Gigabyte 80+ bronze' },
      { className: 'container_monitor', imgSrc: '/assets/hardwareImg/upgrade_pc1/upgrade_pc1_monitor.jpeg', description: 'Monitor: TITAN ARMY P27H2M 22” 100hz' },
      { className: 'container_case', imgSrc: '/assets/hardwareImg/upgrade_pc1/upgrade_pc1_case.png', description: 'Case: CVS Robin Mini Tempered Casing W/x5 Rainbow Fans' },
    ],
    image: '/assets/hardwareImg/upgrade_pc1/IMG_20240805_020929_256.jpg',
  };

  const pc2 = {
    parts: [
      { className: 'container_cpu', imgSrc: '/assets/hardwareImg/pc2/pc2_cpu.webp', description: 'CPU: AMD Ryzen 5 4500 6core 12threads' },
      { className: 'container_motherboard', imgSrc: '/assets/hardwareImg/pc2/pc2_mobo.webp', description: 'Motherboard: Gigabyte B550M AORUS ELITE' },
      { className: 'container_gpu', imgSrc: '/assets/hardwareImg/pc2/pc2_gpu.webp', description: 'GPU: Galax GTX 1650 GDDR6' },
      { className: 'container_ssd', imgSrc: '/assets/hardwareImg/pc2/pc2_ssd.jpg', description: 'SSD: Kingston Nvme 512gb SSD' },
      { className: 'container_ram', imgSrc: '/assets/hardwareImg/pc2/pc2_ram.jpg', description: 'RAM: 16gb Kingston 2x8gb DDR4 3200Mhz' },
      { className: 'container_psu', imgSrc: '/assets/hardwareImg/pc2/pc2_psu.webp', description: 'PSU: Corsair CX550 80+ bronze' },
      { className: 'container_monitor', imgSrc: '/assets/hardwareImg/pc2/pc2_monitor.webp', description: 'Monitor: IPASON Monitor E22266A-J 21.5” 75hz' },
      { className: 'container_case', imgSrc: '/assets/hardwareImg/pc2/pc2_case.jpeg', description: 'Case: YGT M7 Black White' },
    ],
    image: '/assets/hardwareImg/pc2/IMG_19700103_211909.jpg',
  };

  const handleNext = () => {
    if (currentPC === 'pc1') {
      setCurrentPC('pc1_upgrade');
    } else if (currentPC === 'pc1_upgrade') {
      setCurrentPC('pc2');
    } else {
      setCurrentPC('pc1');
    }
  };

  const currentPCData = currentPC === 'pc1' ? pc1 : currentPC === 'pc1_upgrade' ? pc1_upgrade : pc2;

  return (
    <div className="PCBuild" id="PCBuild">
      <div className="container">
        <div className="top_buttons">
          <h2>PC {currentPC === 'pc1' ? '1' : currentPC === 'pc1_upgrade' ? '1 (Upgraded)' : '2'} BUILD</h2>
          <button onClick={() => handleNext()}>Next</button>
        </div>

        <div className="middle_pc_image">
          <img src={currentPCData.image} alt={`PC ${currentPC}`} />
        </div>

        <div className="bottom_pc_parts">
          {currentPCData.parts.map((part, index) => (
            <HardwarePart
              key={index}
              className={part.className}
              imgSrc={part.imgSrc}
              description={part.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PCBuild;
