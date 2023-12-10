import Link from 'next/link';
import Container from '../Container';
import FooterList from './FooterList';
import { MdFacebook } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Model categories</h3>
            <Link href="#">Decoration</Link>
            <Link href="#">Childroom</Link>
            <Link href="#">Funiture</Link>
            <Link href="#">Plants</Link>
            <Link href="#">Textures</Link>
            <Link href="#">Kitchen</Link>
            <Link href="#">Bathroom</Link>
            <Link href="#">Other Model</Link>
            <Link href="#">Materials</Link>
            <Link href="#">Scripts</Link>
            <Link href="#">Technology</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#">Contract Us</Link>
            <Link href="#">Visual Training</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Support</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
              Tầm Nhìn: Chúng tôi hướng đến việc trở thành nguồn cung cấp hàng
              đầu các mô hình 3D sáng tạo và chất lượng cao, đáp ứng mọi nhu cầu
              của người dùng trong ngành [ngành công nghiệp]. Sứ Mệnh: Sứ mệnh
              của chúng tôi là đem đến giải pháp mô hình 3D tiên tiến, phong phú
              và đa dạng, hỗ trợ cho các dự án sáng tạo và tương tác trong thế
              giới kỹ thuật số.
            </p>
            <p>&copy;{new Date().getFullYear()} 3D Online.All right reserved</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
