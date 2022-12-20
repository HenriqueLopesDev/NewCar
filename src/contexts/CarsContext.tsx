import { useState, createContext, ReactNode } from 'react'

interface carsProps {
  fullName: string
  brand: string
  carImg: string
  model: string
  price: string
  transmissionType: string
  gasType: string
}

interface CarsContextType {
  cars: carsProps[]
}

export const CarsContext = createContext({} as CarsContextType)

interface CarsContextProviderProps {
  children: ReactNode
}

export function CarsContextProvider({ children }: CarsContextProviderProps) {
  const [cars] = useState([
    {
      fullName: 'Fiat Cronos',
      brand: 'Fiat',
      carImg:
        'https://www.webmotors.com.br/imagens/prod/348193/FIAT_CRONOS_1.8_E.TORQ_FLEX_AT6_34819314201215724.png?s=fill&w=165&h=110&q=70&t=true',
      model: 'Cronos',
      price: '74.775,00',
      transmissionType: 'Manual',
      gasType: 'Gasolina',
    },
    {
      fullName: 'Fiat Mobi',
      brand: 'Fiat',
      carImg:
        'https://www.webmotors.com.br/imagens/prod/347728/FIAT_MOBI_1.0_EVO_FLEX_LIKE_ON_MANUAL_34772811261702633.png?s=fill&w=165&h=110&q=70&t=true',
      model: 'Mobi',
      price: '62.785,00',
      transmissionType: 'Manual',
      gasType: 'Gasolina',
    },
    {
      fullName: 'Fiat Toro',
      brand: 'Fiat',
      carImg:
        'https://www.webmotors.com.br/imagens/prod/348257/FIAT_TORO_2.0_16V_TURBO_DIESEL_ULTRA_4WD_AT9_34825714361599221.png?s=fill&w=165&h=110&q=70&t=true',
      model: 'Toro',
      price: '160.873,00',
      transmissionType: 'Automático',
      gasType: 'Flex',
    },
    {
      fullName: 'Fiat Uno',
      brand: 'Fiat',
      carImg:
        'https://www.webmotors.com.br/imagens/prod/347726/FIAT_UNO_1.0_FIREFLY_FLEX_DRIVE_MANUAL_34772615534018956.png?s=fill&w=165&h=110&q=70&t=true',
      model: 'Uno',
      price: '58.762,00',
      transmissionType: 'Manual',
      gasType: 'Flex',
    },
    {
      fullName: 'Ford Ecosport',
      brand: 'Ford',
      carImg:
        'https://www.webmotors.com.br/imagens/prod/348325/FORD_ECOSPORT_2.0_TIVCT_FLEX_SE_AUTOMATICO_34832510315406548.png?s=fill&w=165&h=110&q=70&t=true',
      model: 'Ecosport',
      price: '98.316,00',
      transmissionType: 'Automático',
      gasType: 'Gasolina',
    },
    {
      fullName: 'Ford Focus',
      brand: 'Ford',
      carImg:
        'https://www.webmotors.com.br/imagens/prod/346397/FORD_FOCUS_1.6_SE_SEDAN_16V_FLEX_4P_MANUAL_34639712210528422.png?s=fill&w=165&h=110&q=70&t=true',
      model: 'Focus',
      price: '69.257,00',
      transmissionType: 'Manual',
      gasType: 'Híbrido',
    },
    {
      fullName: 'Ford Ka',
      brand: 'Ford',
      carImg:
        'https://www.webmotors.com.br/imagens/prod/348091/FORD_KA_1.0_TIVCT_FLEX_SEL_SEDAN_MANUAL_3480911358172364.png?s=fill&w=165&h=110&q=70&t=true',
      model: 'Ka',
      price: '57.978,00',
      transmissionType: 'Manual',
      gasType: 'Gasolina',
    },
    {
      fullName: 'Ford Mustang',
      brand: 'Ford',
      carImg:
        'https://www.webmotors.com.br/imagens/prod/348635/FORD_MUSTANG_5.2_V8_GASOLINA_SHELBY_GT_350_MANUAL_34863512375377067.png?s=fill&w=275&h=183&q=70&t=true',
      model: 'Mustang',
      price: '542.215,00',
      transmissionType: 'Automático',
      gasType: 'Flex',
    },
    {
      fullName: 'Volkswagen UP',
      brand: 'Volkswagen',
      carImg:
        'https://www.webmotors.com.br/imagens/prod/348021/VOLKSWAGEN_UP_1.0_170_TSI_TOTAL_FLEX_XTREME_4P_MANUAL_34802115043999215.png?s=fill&w=165&h=110&q=70&t=true',
      model: 'UP',
      price: '79.720,00',
      transmissionType: 'Automático',
      gasType: 'Flex',
    },
    {
      fullName: 'Volkswagen Gol',
      brand: 'Volkswagen',
      carImg:
        'https://www.webmotors.com.br/imagens/prod/347790/VOLKSWAGEN_GOL_1.6_16V_MSI_TOTALFLEX_4P_AUTOMATICO_3477901445490019.png?s=fill&w=165&h=110&q=70&t=true',
      model: 'Gol',
      price: '138.293,33',
      transmissionType: 'Manual',
      gasType: 'Gasolina',
    },
    {
      fullName: 'Volkswagen Golf',
      brand: 'Volkswagen',
      carImg:
        'https://www.webmotors.com.br/imagens/prod/348250/VOLKSWAGEN_GOLF_1.4_TSI_HIBRIDO_GTE_DSG_34825018303584638.png?s=fill&w=165&h=110&q=70&t=true',
      model: 'Golf',
      price: '542.215,00',
      transmissionType: 'Automático',
      gasType: 'Flex',
    },
    {
      fullName: 'Volkswagen Polo',
      brand: 'Volkswagen',
      carImg:
        'https://www.webmotors.com.br/imagens/prod/348298/VOLKSWAGEN_POLO_1.4_250_TSI_GTS_AUTOMATICO_34829821124885135.png?s=fill&w=165&h=110&q=70&t=true',
      model: 'Polo',
      price: '95.861,00',
      transmissionType: 'Automático',
      gasType: 'Flex',
    },
    {
      fullName: 'Chevrolet Onix',
      brand: 'Chevrolet',
      carImg:
        'https://www.webmotors.com.br/imagens/prod/348336/CHEVROLET_ONIX_1.0_FLEX_PLUS_LT_MANUAL_34833608481929277.png?s=fill&w=165&h=110&q=70&t=true',
      model: 'Onix',
      price: '85.259,00',
      transmissionType: 'Automático',
      gasType: 'Flex',
    },
    {
      fullName: 'Chevrolet Cruze',
      brand: 'Chevrolet',
      carImg:
        'https://www.webmotors.com.br/imagens/prod/348183/CHEVROLET_CRUZE_1.4_TURBO_FLEX_PREMIER_AUTOMATICO_34818313442694964.png?s=fill&w=165&h=110&q=70&t=true',
      model: 'Cruze',
      price: '95.861,00',
      transmissionType: 'Automático',
      gasType: 'Flex',
    },
    {
      fullName: 'Chevrolet Corsa',
      brand: 'Chevrolet',
      carImg:
        'https://www.webmotors.com.br/imagens/prod/344035/CHEVROLET_CORSA_1.0_MPFI_CLASSIC_SEDAN_LIFE_8V_FLEX_4P_MANUAL_34403511113689724.png?s=fill&w=165&h=110&q=70&t=true',
      model: 'Corsa',
      price: '25.474,00',
      transmissionType: 'Manual',
      gasType: 'Gasolina',
    },
    {
      fullName: 'Chevrolet Celta',
      brand: 'Chevrolet',
      carImg:
        'https://www.webmotors.com.br/imagens/prod/345294/CHEVROLET_CELTA_1.0_MPFI_ADVANTAGE_8V_FLEX_4P_MANUAL_34529410513817270.png?s=fill&w=275&h=183&q=70&t=true',
      model: 'Celta',
      price: '34.796,00',
      transmissionType: 'Manual',
      gasType: 'Gasolina',
    },
    {
      fullName: 'Honda Civic',
      brand: 'Honda',
      carImg:
        'https://www.webmotors.com.br/imagens/prod/348100/HONDA_CIVIC_2.0_16V_FLEXONE_LX_4P_CVT_34810015303079953.png?s=fill&w=165&h=110&q=70&t=true',
      model: 'Civic',
      price: '122.183,00',
      transmissionType: 'Automático',
      gasType: 'Flex',
    },
    {
      fullName: 'Hyundai HB20',
      brand: 'Hyundai',
      carImg:
        'https://www.webmotors.com.br/imagens/prod/348309/HYUNDAI_HB20_1.0_TGDI_FLEX_SPORT_AUTOMATICO_34830921512591077.png?s=fill&w=165&h=110&q=70&t=true',
      model: 'HB20',
      price: '34.796,00',
      transmissionType: 'Automático',
      gasType: 'Flex',
    },
    {
      fullName: 'Renault Captur',
      brand: 'Renault',
      carImg:
        'https://www.webmotors.com.br/imagens/prod/348220/RENAULT_CAPTUR_2.0_16V_HIFLEX_BOSE_AUTOMATICO_34822016234182514.png?s=fill&w=165&h=110&q=70&t=true',
      model: 'Captur',
      price: '142.189,00',
      transmissionType: 'Automático',
      gasType: 'Flex',
    },
    {
      fullName: 'Toyota Corolla',
      brand: 'Toyota',
      carImg:
        'https://www.webmotors.com.br/imagens/prod/348134/TOYOTA_COROLLA_1.8_VVTI_HYBRID_FLEX_ALTIS_CVT_3481341954005167.png?s=fill&w=165&h=110&q=70&t=true',
      model: 'Corolla',
      price: '146.612,00',
      transmissionType: 'Automático',
      gasType: 'Flex',
    },
  ])
  return (
    <CarsContext.Provider value={{ cars }}>{children}</CarsContext.Provider>
  )
}
