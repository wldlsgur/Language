package CHAPTER2;
import java.util.Scanner;

public class p110_3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ChangeCount cc = new ChangeCount();
	}

}
class ChangeCount
{
	private Scanner sc = new Scanner(System.in);
	private int money;
	private int fiveman;
	private int man;
	private int chun;
	private int baek;
	private int fiveship;
	private int ship;
	private int one;
	
	public ChangeCount()
	{
		System.out.print("�ݾ��� �Է��Ͻÿ�>>");
		Input();
		Count();
		Print();
	}
	
	private void Input()
	{
		money = sc.nextInt();
	}
	private void Count()
	{
		fiveman = money/50000;
		if(fiveman != 0) ReusltMoney(50000, fiveman);
		man = money/10000;
		if(man != 0) ReusltMoney(10000, man);
		chun = money/1000;
		if(chun != 0) ReusltMoney(1000, chun);
		baek = money/100;
		if(baek != 0) ReusltMoney(100, baek);
		fiveship = money/50;
		if(fiveship != 0) ReusltMoney(50, fiveship);
		ship = money/10;
		if(ship != 0) ReusltMoney(10, ship);
		one = money/1;
	}
	private void ReusltMoney(int how, int fiveman)
	{
		money = money - how * fiveman;
	}
	private void Print()
	{
		System.out.print("��������" + fiveman +"��\n" + "������" + man +"��\n" + "õ����" + chun +"��\n" + "���" + baek +"��\n" + "���ʿ�" + fiveship +"��\n" + "�ʿ�" + ship +"��\n" + "�Ͽ�" + one +"��\n");
	}
}