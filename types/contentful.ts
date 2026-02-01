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
