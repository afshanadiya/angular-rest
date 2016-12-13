package abstractFactory;

/*
 * 1)a system should be independent of how its products are created, composed and represented
   2)a system should be configured with one of multiple families of products
   3)a family of related product objects is designed to be used together, and you need to enforce this constraint
   4)you want to provide a class library of products, and you want to reveal just their interfaces, not their implementations
 * 
 */
public class AbstractFactory {

	public paymentFactory getPaymentFactory(String type){
		if("online".equals(type)){
			//load online factory
			return new onlineFactory();
		}else{
			//load offline factory
			return new offlinePaymemtFactory();
		}
	}
}
