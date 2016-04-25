class Pangram
  VERSION = 1

  def self.is_pangram?(str)
    alphabet_character_matches(str) >= 26
  end

  def self.alphabet
    ("a".."z").to_a
  end

  def self.alphabet_character_matches(str)
    alphabet.map do |char|
      str.downcase.include?(char)
    end.count { |value| value == true }
  end
end
