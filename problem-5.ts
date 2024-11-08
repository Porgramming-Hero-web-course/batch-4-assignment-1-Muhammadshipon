
const getProperty=<T,Q extends keyof T>(person:T,property:Q):T[Q]=>{
return person[property];
}
