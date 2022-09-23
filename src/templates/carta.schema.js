export const ProcesoSchema = {
    tipo: "tipoProceso",
    medio: "medioProceso",
    codigos: [
        "string",
    ]
}

export const PersonaSchema = {
    ciONit: "ci/nit",
    tipo: "tipoPersona",
    nombre: "nombrePersona",
    importe: {
        monto: 0,
        moneda: "moneda",
    },
    cuentas: [
        {
            nro: 0,
            manejo: "manejo",
            moneda: "moneda",
            importeRetenido: 0,
            equivalenteDolares: 0,
        }
    ]
}

export const SeguidorSchema = {
    nombre: "seguidor",
    personas: [
        PersonaSchema,
        PersonaSchema,
    ]
}

export const DestinatarioSchema = {
    nombre: "nombreDestinatario",
    ubicación: "ubicacionDestinatario",
    nurej: 0,
    cargos: [
        "cargoDestinatario",
    ],
}

export const CartaSchema = {
    codigoCite: "codigoCite",
    fechaEmision: new Date(),
    destinatario: DestinatarioSchema,

    fecha: new Date(),
    proceso: ProcesoSchema,
    codTramite: "codTramite",

    importe: {
        monto: 0,
        moneda: "moneda",
        fecha: new Date(),
    },
    circular: {
        tipo: "tipoCircular",
        codigo: "codigoCircular",
    },

    seguidoPor: SeguidorSchema,
    usuarioTopaz: "usuarioTopaz",
}