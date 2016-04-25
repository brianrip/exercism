class Robot
  attr_reader :name, :new_name

  def initialize
    @name ||= random_name
    @new_name = random_name
  end

  def reset
    @name = new_name
  end

  def random_name
    ("a".."z").to_a.shuffle[0..1].join.upcase << ("0".."9").to_a.shuffle[0..2].join
  end

end
