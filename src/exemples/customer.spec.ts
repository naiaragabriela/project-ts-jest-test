import { IndividualCustomer, EnterpriseCustomer } from '../classes/customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName, cpf', () => {
    const sut = createIndividualCustomer('Naiara', 'Gabriela', '122.111');
    expect(sut).toHaveProperty('firstName', 'Naiara');
    expect(sut).toHaveProperty('lastName', 'Gabriela');
    expect(sut).toHaveProperty('cpf', '122.111');
  });

  it('should have methods to get name and idn for individual customer', () => {
    const sut = createIndividualCustomer('Naiara', 'Gabriela', '122.111');
    expect(sut.getName()).toBe('Naiara');
    expect(sut.getIDN()).toBe('122.111');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Empresa Feliz', '222');
    expect(sut).toHaveProperty('name', 'Empresa Feliz');
    expect(sut).toHaveProperty('cnpj', '222');
  });

  it('should have methods to get name and idn for enterprise customer', () => {
    const sut = createEnterpriseCustomer('Empresa Feliz', '222');
    expect(sut.getName()).toBe('Empresa Feliz');
    expect(sut.getIDN()).toBe('222');
  });
});
