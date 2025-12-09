// solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
//   /* ptotal = (m1/M1 + m2/M2)RT/V */
//   let m_t = givenMass1 / molarMass1 + givenMass2 / molarMass2;
//   let T_kelvin = temp + 273.15;
//   let R = 0.082;
//   let top = m_t * R * T_kelvin;
//   let total = top / volume;
//   return total;
// };

solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  /* ptotal = (m1/M1 + m2/M2)RT/V */
  return (
    ((givenMass1 / molarMass1 + givenMass2 / molarMass2) *
      0.082 *
      (temp + 273.15)) /
    volume
  );
};

console.log(solution(44, 30, 3, 2, 5, 50)); //0.714651121212121
