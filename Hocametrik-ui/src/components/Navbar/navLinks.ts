import { FaUniversity, FaStar, FaUsers, FaEnvelope } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

const navLinks = [
  { id: 0, name: 'Üniversiteler', href: '/universities', icon: FaUniversity },
  { id: 1, name: 'Hakkımızda', href: '/about', icon: FaStar },
  { id: 2, name: 'Gizlilik ve Güvenlik', href: '/privacy-policy', icon: FaUsers },
  { id: 4, name: 'İletişim', href: '/contact', icon: FaEnvelope },
]

export type NavLink = {
  id: number;
  name: string;
  href: string;
  icon: IconType;
}

export default navLinks;