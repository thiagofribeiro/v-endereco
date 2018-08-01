let cepInLocalidade = (param) => (value, vm) =>  param === `${vm.localidade}/${vm.ufSigla}` || !vm.idCep;

export default cepInLocalidade;