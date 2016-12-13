package abstractFactory;

public class onlineFactory extends paymentFactory {
	@Override
	public Payment getPayment(String type) {
		// TODO Auto-generated method stub
		if("paytm".equals(type)){
			return new Paytm();	
		}else{
			return new netbanking();
		}
	}	
}
