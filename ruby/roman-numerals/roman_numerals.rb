class Fixnum

  VERSION = 1

  def character_map
    { "M"  => 1000,
      "CM" => 900,
      "D"  => 500,
      "CD" => 400,
      "C"  => 100,
      "XC" => 90,
      "L"  => 50,
      "XL" => 40,
      "X"  => 10,
      "IX" => 9,
      "V"  => 5,
      "IV" => 4,
      "I"  => 1 }
  end

  def to_roman
    number = self

    character_map.inject('') do |roman_numeral, (roman, arabic )|
      while number >= arabic
        number -= arabic
        roman_numeral << roman
      end
      roman_numeral
    end
  end
end
