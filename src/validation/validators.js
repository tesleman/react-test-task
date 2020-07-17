export const required = (value) =>
    value ?  undefined : "require"

export const email = (value) =>
    value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/) ? undefined : "invalid email"
export const phone = (value) =>
    value.match(/^\+?3?8?(0\d{9})$/) ? undefined : "invalid email"
