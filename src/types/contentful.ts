export type BoardMember = {
  sys: { id: string };
  fields: {
    name: string;
    phonenumber: string;
    email?: string;
    position: string;
    photo?: {
      sys: { id: string };
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
};

export type ImpressumContent = {
  sys: { id: string };
  fields: {
    kontaktTelefon: string;
    kontaktEmail: string;
    registereintragRegistergericht: string;
    registereintragRegisternummer: string;
    umsatzsteuerIdentifikationsnummer: string;
  };
};
