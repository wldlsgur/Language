package CHAPTER2;
import java.util.Scanner;

public class p106 {

	public static void main(String[] args) {
		Startgame sg = new Startgame();
		sg.input();
	}
}
class Startgame
{
	Scanner sc = new Scanner(System.in);
	String culsu = null;
	String younghee = null;
	
	public Startgame()
	{
		System.out.println("���������� �����Դϴ�. ����, ����, �� �߿��� �Է��ϼ���");
	}
	
	public void input()
	{
		System.out.print("ö�� >> ");
		culsu = sc.nextLine();
		System.out.print("���� >> ");
		younghee = sc.nextLine();
		
		printresult(culsu, younghee);
	}
	private void printresult(String culsu, String younghee)
	{
		if(culsu.equals("����"))
		{
			if(younghee.equals("����")) System.out.println("�����ϴ�.");
			else if(younghee.equals("����")) System.out.println("���� �̰���ϴ�.");
			else if(younghee.equals("��")) System.out.println("ö���� �̰���ϴ�.");
		}
		else if(culsu.equals("����"))
		{
			if(younghee.equals("����")) System.out.println("ö���� �̰���ϴ�.");
			else if(younghee.equals("����")) System.out.println("�����ϴ�.");
			else if(younghee.equals("��")) System.out.println("���� �̰���ϴ�.");
		}
		else if(culsu.equals("��"))
		{
			if(younghee.equals("����")) System.out.println("���� �̰���ϴ�.");
			else if(younghee.equals("����")) System.out.println("ö���� �̰���ϴ�.");
			else if(younghee.equals("��")) System.out.println("�����ϴ�.");
		}
	}
}
