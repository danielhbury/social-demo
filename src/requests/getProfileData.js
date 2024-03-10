// Mocked Request for Profile Data
import fullfacerubMock from '../../mock/profiles/fullfacerub.json';
import theRealHornetMock from '../../mock/profiles/theRealHornet.json';

const getProfileData = (setter) => (handle) => {
  // make fetch request
  const returnedData = handle === '@fullfacerub' ? fullfacerubMock : theRealHornetMock;
  setter(returnedData);
}

export default getProfileData;
