package CHAPTER2;
import java.util.Scanner;

public class p110_1 {
	public static void main(String[] args) {
		DollerChange ip = new DollerChange();
	}
}
class DollerChange
{
	private final int doller = 1100;
	private Scanner sc = new Scanner(System.in);
	private int money = 0;
	private double result;
	
	public DollerChange()
	{
		System.out.print("���ϸ� �Է��ϼ���(���� ��)>>");
		input();
		Changemoney();
	}
	
	private void input()
	{
		money = sc.nextInt();
	}
	
	private void Changemoney()
	{
		result = (money / doller);
		System.out.println(money + "���� $" + result + "�Դϴ�.");
	}
}