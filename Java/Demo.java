class Human {
    private int age = 10;
    private String name = "Shashi";

    public Human() {
        
    }

    public Human(String name) {
        this.name = name;
    }

    public Human(int age, String name) {
        this.age = age;
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

public class Demo {
    public static void main(String[] args) {
        Human ob = new Human();
        // ob.age=20'
        ob.setName("Shashi");
        System.out.println(ob.getName());
    }
}