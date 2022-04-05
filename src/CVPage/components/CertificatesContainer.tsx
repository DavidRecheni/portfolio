import Header from '../../core/components/Header';
import SidebarTwoCols from './SidebarTwoCols';

const certificates = [{
  name: 'Agile methodologies expert',
  details: 'Accenture',
},
{
  name: '.NET MVC 5 Dev',
  details: 'ComunidadIT',
},
];

const CertificatesContainer = () => (
  <>
    <Header>Certificates </Header>
    {certificates.map((c) => (
      <SidebarTwoCols data={c} key={c.name} />
    ))}
  </>
);

export default CertificatesContainer;
